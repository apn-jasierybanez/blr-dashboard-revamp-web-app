/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo.thymeleaf.account;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Jasiery Ybanez
 */
@Data
public class AccountActivationData {
    
    private Header header;
    
    private Email email;

    @Data
    public class Header {
        private String url;
        private String imageUrl;
    }
    
    @Data
    public class Email {
        private Title title;
//        private Body body;
//        private Closing closing;
//        private Footer footer;
        
        public class Title {
            private String imageUrl;
            private String description;
        }
    }
    
    
}
