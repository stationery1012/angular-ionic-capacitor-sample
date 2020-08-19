//
//  MyPlugin.m
//  App
//
//  Created by stationery1012 on 2020/08/19.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(MyPlugin, "MyPlugin",
  CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
