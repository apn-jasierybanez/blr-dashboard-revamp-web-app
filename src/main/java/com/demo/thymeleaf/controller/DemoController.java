/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo.thymeleaf.controller;

import com.demo.thymeleaf.account.AccountActivationData;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Jasiery Ybanez
 */
@Controller
public class DemoController {
    
    @Autowired
    private MapUtility map;
    
    @RequestMapping(value="/account-activation", method = RequestMethod.GET)
    public ModelAndView getAccountActivationTemplate() {
        ModelAndView modelAndView = new ModelAndView();
        AccountActivationData data = new AccountActivationData();
        AccountActivationData.Header header = data.new Header();
        header.setUrl("https://billeroo.com");
        header.setImageUrl("../img/error.svg");
        data.setHeader(header);
        modelAndView.setViewName("account-activation");
        modelAndView.addObject("data", data);
        return modelAndView;
    }
    
    @RequestMapping(value="/employees", method = RequestMethod.GET)
    public ModelAndView getEmployeeList() {
        ModelAndView modelAndView = new ModelAndView();
        List<Map<String, Object>> employees = exampleEmployeeData();
        modelAndView.setViewName("employee-list");
        modelAndView.addObject("employees", employees);
        return modelAndView;
    }
    
    private List<Map<String, Object>> exampleEmployeeData() {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        list.add(map.of("employeeId", "00123", "name", "LJ Anfone", "number", "09123456789", "email", "ljanfone@email.com"));
        list.add(map.of("employeeId", "00456", "name", "Jen Lopoz", "number", "09123456789", "email", "jenlopoz@gmail.com"));
        list.add(map.of("employeeId", "00789", "name", "Jai Ybanez", "number", "09123456789", "email", "jaiybanez@email.com"));
        list.add(map.of("employeeId", "00112", "name", "Ana Forger", "number", "09123456789", "email", "anforger@email.com"));
        list.add(map.of("employeeId", "00113", "name", "Lloyd Twilight", "number", "09123456789", "email", "loidtwilight@email.com"));
        list.add(map.of("employeeId", "00114", "name", "Yna Briar", "number", "09123456789", "email", "yorhusbann@email.com"));
        return list;
    }
    
    @RequestMapping(value="/experiment", method = RequestMethod.GET)
    public ModelAndView getExperimentPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("experiment-th");
        return modelAndView;
    }
}
