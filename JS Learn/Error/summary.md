



### error
1. try catch finally 后两者可以只选择其一进行组合，catch 可以获取error 也可以不获取，error重要的属性有三个，name,message,stack
2. 处理error 好的方式是只处理你了解的error, 其他的可以抛出，交给其他的程序
3. 浏览器有全局的处理方式，为了给开发者看的，在window.onerror上，你可以设置一个方法,来接收
4. 可以继承基础的异常类，来写更高级的异常，将一批的基础异常包装，简化，更有利于整个错误流程的处理和鉴别。这很考验代码功底