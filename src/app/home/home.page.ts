import { Component } from '@angular/core'
import { Plugins } from '@capacitor/core'
import { Capacitor } from '@capacitor/core'

const { Browser } = Plugins
const { MyPlugin } = Plugins

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: string

  constructor() {
    this.value = 'test'
  }

  async openBrowser() {
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: 'https://ionicframework.com' })
  }
  async echo() {
    const result = await MyPlugin.echo({ value: 'Hello World!' })
    this.value = result.value
  }

  clear() {
    this.value = 'test'
  }
}
