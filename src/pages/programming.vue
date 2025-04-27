<script setup>
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';

const router = useRouter();
let cursorInterval;

const nextPage = () => {
  clearInterval(cursorInterval);
  router.push('/resume');
};

cursorInterval = setInterval(function() {
  var display = document.getElementById('cursor').style.display;
  document.getElementById('cursor').style.display = (display == 'inline') ? 'none' : 'inline';
}, 600);

onBeforeUnmount(() => {
  clearInterval(cursorInterval);
});
</script>

<template>
<div class="popup-load content" @click="nextPage">
    <div class="popup-content">
        <div class="command">
        <p>Microsoft Windows [Version 10.0.19045.4291]</p>
        <p>Copyright (c) 2009 Microsoft Corporation. All rights reserved.</p>
        <br>
        </div>

        <h2><span class="var">var</span><span class="name"> Joe_Tang </span><span class="equal">= </span><span class="bracket">{</span></h2>
        <div class="tabbed">
            <h3>
                <span class="name">Client_Side: </span>
                <span class="sbracket">[</span>
                    <span class="internal">"HTML"</span><span class="equal">, </span>
                    <span class="internal">"CSS"</span><span class="equal">, </span>
                    <span class="internal">"Javascript"</span><span class="equal">, </span>
                    <span class="internal">"Vue.js"</span><span class="equal">, </span>
                    <span class="internal">"jQuery"</span><span class="equal">, </span>
                    <span class="internal">"Sass"</span>
                <span class="sbracket">]</span><span class="equal">,</span>
            </h3>
            <h3>
                <span class="name">Server_Side: </span>
                <span class="sbracket">[</span>
                    <span class="internal">"Laravel"</span><span class="equal">, </span>
                    <span class="internal">"SQL"</span><span class="equal">, </span>
                    <span class="internal">"Flask"</span><span class="equal">, </span>
                    <span class="internal">"Python"</span>
                <span class="sbracket">]</span><span class="equal">,</span>
            </h3>
            <h3>
                <span class="name">UX_UI: </span>
                <span class="sbracket">[</span>
                    <span class="internal">"Figma"</span><span class="equal">, </span>
                    <span class="internal">"Balsamiq"</span><span class="equal">, </span>
                    <span class="internal">"InVision"</span><span class="equal">, </span>
                    <span class="internal">"Lucid"</span>
                <span class="sbracket">]</span><span class="equal">,</span>
                </h3>
            <h3>
                <span class="name">Project_Management: </span>
                <span class="sbracket">[</span>
                    <span class="internal">"Jira"</span><span class="equal">, </span>
                    <span class="internal">"Kanban"</span>
                <span class="sbracket">]</span>
            </h3>
        </div>
        <h2><span class="bracket">}</span></h2>

        <div class="command">
        <p id="typewriter">C:\Users\Joe_Tang\Press any key to compile <span id="cursor">█</span></p>
        </div>
    </div>
</div>
</template>

<style scoped src="@/assets/programming.css"></style>