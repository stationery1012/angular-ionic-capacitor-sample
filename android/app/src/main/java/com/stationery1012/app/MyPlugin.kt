package com.stationery1012.app

import com.getcapacitor.*

@NativePlugin
class MyPlugin : Plugin() {
    @PluginMethod
    fun echo(call: PluginCall) {
        val value = call.getString("value")
        val ret = JSObject()
        ret.put("value", "$value from Android")
        call.success(ret)
    }
}