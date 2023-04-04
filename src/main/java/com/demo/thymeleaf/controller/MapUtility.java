/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo.thymeleaf.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

/**
 *
 * @author Jasiery Ybanez
 */
@Component
public class MapUtility<K, V> {
    
    public Map<K,V> of(K k1, V v1, K k2, V v2, K k3, V v3, K k4, V v4) {
        Map<K, V> map = of (k1, v1, k2, v2, k3, v3);
        map.put(k4, v4);
        return map;
    }
    
    public Map<K,V> of(K k1, V v1, K k2, V v2, K k3, V v3) {
        Map<K, V> map = of (k1, v1, k2, v2);
        map.put(k3, v3);
        return map;
    }
    
    public Map<K, V> of(K k1, V v1, K k2, V v2) {
        Map<K, V> map = of (k1, v1);
        map.put(k2, v2);
        return map;
    }
    
    public Map<K, V> of(K k1, V v1) {
        Map<K, V> map = new HashMap();
        map.put(k1, v1);
        return map;
    }
}
