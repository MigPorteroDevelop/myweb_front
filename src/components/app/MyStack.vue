<script>
// import Atropos component
import AtroposComponent from 'atropos/element';
// register Atropos component
customElements.define('atropos-component', AtroposComponent);
</script>


<template>
    <div class="flex flex-col h-screen sm:flex-row justify-center items-center sm:space-x-12 px-12">
        <div class="w-52">
            <atropos-component>
                <img src="/images/General/pc1.jpg" />
                <h1>Vue JS</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</h2>
            </atropos-component>
        </div>
        <div class="w-52 ">
            <atropos-component>
                <img src="/images/General/pc1.jpg" />
                <h1>Vue JS</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</h2>
            </atropos-component>
        </div>
        <div class="w-52 ">
            <atropos-component>
                <img src="/images/General/pc1.jpg" />
                <h1>Vue JS</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</h2>
            </atropos-component>
        </div>
        <div class="w-52 ">
            <atropos-component>
                <img src="/images/General/pc1.jpg" />
                <h1>Vue JS</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</h2>
            </atropos-component>
        </div>
    </div>
</template>