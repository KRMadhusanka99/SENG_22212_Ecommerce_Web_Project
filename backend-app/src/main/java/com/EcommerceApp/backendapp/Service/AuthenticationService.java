package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.Repository.TokenRepository;
import com.EcommerceApp.backendapp.Repository.UserRepository;
import com.EcommerceApp.backendapp.Email.EmailSender;
import com.EcommerceApp.backendapp.Email.EmailValidator;
import com.EcommerceApp.backendapp.RequestandResponse.Request.AuthenticationRequest;
import com.EcommerceApp.backendapp.RequestandResponse.Request.RegisterRequest;
import com.EcommerceApp.backendapp.RequestandResponse.Request.VerifyRequest;
import com.EcommerceApp.backendapp.RequestandResponse.Response.AuthenticationResponse;
import com.EcommerceApp.backendapp.Entity.Token.Token;
import com.EcommerceApp.backendapp.Entity.Token.TokenType;
import com.EcommerceApp.backendapp.Entity.User;
import com.EcommerceApp.backendapp.Entity.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final EmailValidator emailValidator;

    private final EmailSender emailSender;


    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phonenumber(request.getPhonenumber())
                .userRole(UserRole.USER_ROLE)
                .build();

        boolean isValidEmail = emailValidator.
                test(request.getEmail());
        if (!isValidEmail) {
            throw new IllegalStateException("Invalid Email Address");
        }

        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        String link = "http://localhost:8080/authenticate/confirm?token=" + jwtToken;
        emailSender.send(
                request.getEmail(),
                buildEmail(request.getFirstname(), link));
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse reVerifyEmail(VerifyRequest request){
        User userDe = userRepository.findByEmail(request.getEmail())
                .orElseThrow();

        var user = User.builder()
                .firstname(userDe.getFirstname())
                .lastname(userDe.getLastname())
                .email(userDe.getEmail())
                .password(passwordEncoder.encode(userDe.getPassword()))
                .phonenumber(userDe.getPhonenumber())
                .userRole(UserRole.USER_ROLE)
                .build();
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(userDe, jwtToken);
        String link = "http://localhost:8080/authenticate/confirm?token=" + jwtToken;
        emailSender.send(
                userDe.getEmail(),
                buildEmail(userDe.getFirstname(), link));
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false).expiredAt(LocalDateTime.now().plusMinutes(10))
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
    @Transactional
    public String confirmToken(String token) {
        Token confirmationToken = tokenRepository
                .findByToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            return ("<div class=\"container\" style=\"text-align:center;\">\n" +
                    "    <h2 style=\"font-family:Helvetica,Arial,sans-serif; font-size:25px;line-height:25px;\">Sorry, we could not verify account. It has already been verified successfully\n" +
                    "        </h2>\n" +
                    "    <a style=\"font-size:18px;\" href=\"http://localhost:3000/\">Click here to Login</a>\n" +
                    "</div>");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiredAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            return ("<div class=\"container\" style=\"text-align:center;\">\n" +
                    "    <h2 style=\"font-family:Helvetica,Arial,sans-serif; font-size:25px;line-height:25px;\">Sorry, we could not verify account.\n" +
                    "        Link has been expired. Try again...</h2>\n" +
                    "    <a style=\"font-size:18px;\" href=\"http://localhost:3000/verify\">Click here to Verify Again</a>\n" +
                    "</div>");
        }

        tokenRepository.updateConfirmedAt(token,LocalDateTime.now());
        userRepository.verifyUser(
                confirmationToken.getUser().getEmail());
        return "<div class=\"container\" style=\"text-align:center;\">\n" +
                "    <h2 style=\"font-family:Helvetica,Arial,sans-serif; font-size:25px;line-height:25px;\">Congratulations, your account has been verified.</h2>\n" +
                "    <a style=\"font-size:18px;\" href=\"http://localhost:3000/\">Click here to Login</a>\n" +
                "</div>";
    }

    private String buildEmail(String name, String link) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"50\" bgcolor=\"#green\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"##0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Verify your Account</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hello " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:25px;font-weight:bold;line-height:25px;color:#0b0c0c\"> Thank you for registering.\n You're on your way!\n" +
                "Let's confirm your email address.</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">By clicking on the following link, you are confirming your email address. </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:green\"> <a href=\"" + link + "\">Confirm Email Address</a> </p></blockquote>\n Link will expire in 10 minutes. <p>Confirm with confidence</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }
}
