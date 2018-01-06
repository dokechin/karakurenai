import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Karakurenai')
    expect(vm.$el.querySelector('.hello h2').textContent)
    .toEqual('開始前')
  })
  it('changes next card', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    // simulate click event
    const nextButton = vm.$el.querySelector('button#next');
    const clickEvent = new window.Event('click');
    nextButton.dispatchEvent(clickEvent);
    vm._watcher.run();

    expect(vm.$el.querySelector('.hello h2').textContent)
    .toEqual('1首目')

    const againButton = vm.$el.querySelector('button#again');
    againButton.dispatchEvent(clickEvent);
    vm._watcher.run();

    expect(vm.$el.querySelector('.hello h2').textContent)
    .toEqual('1首目')

    for(var i=0;i<99;i++){
      const nextButton = vm.$el.querySelector('button#next');
      nextButton.dispatchEvent(clickEvent);
      vm._watcher.run();

      if (i < 98){
        expect(nextButton.disabled)
        .toEqual(false)
      }
      else{
        expect(nextButton.disabled)
        .toEqual(true)        
      }

      expect(vm.$el.querySelector('.hello h2').textContent)
      .toEqual( (i + 2 ) + '首目')
    }

  })
})
