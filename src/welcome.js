//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  tabs = ""

  // Simulate router configuration
  exampleLinks = [
    {
      title: 'Home',
      settings: {
        icon: 'home'
      },
      id: 'binding-1'
    },
    {
      title: 'Add User',
      settings: {
        icon: 'social:person-add'
      },
      id: 'binding-2'
    }
  ]

  log() {
    let args = Array.from(arguments);
    args.unshift(this.tabs);
    console.log.apply(console, args);
  }

  tabIn() {
    this.tabs += '\t';
  }

  tabOut() {
    if(this.tabs.length == 1) this.tabs = '';
    else tabs = this.tabs.substring(0, this.tabs.length-1);
  }

  describe(paperItemID, title) {
    var icon = $('#' + paperItemID + ' iron-icon');
    if(icon && icon[0]) icon = icon[0];
    this.log(title)
    this.tabIn()
    this.log('Property definition on Element')
    this.log(Object.getOwnPropertyDescriptor(icon, 'icon'))
    this.log('Property definition on Prototype')
    this.log(Object.getOwnPropertyDescriptor(icon.__proto__, 'icon'))
    this.log('Icon property value:', icon.icon)
    this.tabOut();
  }

  attached() {
    this.log('Debug information follows!!');
    this.describe('binding-1', 'Binding: Home')
    this.describe('binding-2', 'Binding: Add')
    this.describe('proof-1', 'Proof: Home')
    this.describe('proof-1', 'Proof: Add')
  }
}
