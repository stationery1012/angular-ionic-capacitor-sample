//
//  MyPlugin.swift
//  App
//
//  Created by stationery1012 on 2020/08/19.
//

import Foundation
import Capacitor

@objc(MyPlugin)
public class MyPlugin: CAPPlugin {
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.success([
        "value": value + " from ios"
    ])
  }
}
