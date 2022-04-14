(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(async function(){
  
    $("#about").click(async function(){
      await $.get("https://digiyo.io/about", async function(content){
        await $("#myModalType").removeClass()
        await $("#myModalType").addClass('modal-lg')
        document.getElementById("uni-modal").innerHTML = content;
        document.getElementById("exampleModalLongTitle").innerHTML = "ABOUT";
        await $("#myModal").modal('show');
      });
    });

    $("#careers").click(async function(){
      await $.get("https://digiyo.io/careers", async function(content){
        await $("#myModalType").removeClass()
        await $("#myModalType").addClass('modal-lg')
        document.getElementById("uni-modal").innerHTML = content;
        document.getElementById("exampleModalLongTitle").innerHTML = "CAREERS";
        await $("#myModal").modal('show');
      });
    });

    $("#privacy").click(async function(){
      await $.get("https://digiyo.io/privacy", async function(content){
        await $("#myModalType").removeClass()
        await $("#myModalType").addClass('modal-xl')
        document.getElementById("uni-modal").innerHTML = content;
        document.getElementById("exampleModalLongTitle").innerHTML = "PRIVACY POLICY";
        await $("#myModal").modal('show');
      });
    });

    $("#t-and-c").click(async function(){
      await $.get("https://digiyo.io/t-and-c", async function(content){
        await $("#myModalType").removeClass()
        await $("#myModalType").addClass('modal-xl')
        document.getElementById("uni-modal").innerHTML = content;
        document.getElementById("exampleModalLongTitle").innerHTML = "TERMS OF SERVICE";
        await $("#myModal").modal('show');
      });
    });
    
    $(".close").click(async function(){
      await $("#myModal").modal('hide');
    });
    
  });
},{}]},{},[1]);
