package cmpt276.pg6.realtorest.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import jakarta.servlet.http.HttpServletRequest;

/**
 * This controller contains the get mappings for the redirects
 */
@Controller
public class RedirectController extends BaseController {
    /**
     * Grabs the current URL and stores it as a model attribute, which means everything can use it. Mostly used for refreshing the page.
     */
    @ModelAttribute("currentUrl")
    public String getCurrentUrl(HttpServletRequest request) {
        return request.getRequestURI();
    }

    @GetMapping("/dev/user")
    public String redirectDevUser() {
        return "redirect:/dev/users";
    }

    @GetMapping("/dev/property")
    public String redirectDevProperty() {
        return "redirect:/dev/properties";
    }

    // Previously this redirected to /dev, but now we have a dev page for the admins database
    @GetMapping("/dev/admin")
    public String redirectDevAdmin() {
        return "redirect:/dev/admins";
    }

}
