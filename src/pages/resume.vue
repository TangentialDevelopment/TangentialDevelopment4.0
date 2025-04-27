<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const nextPage = () => {
  router.push('/');
};
</script>

<template>
<div class="content" @click="nextPage">
<p class="reminder">Click to go back</p>
<div class="experience">
    <h2 class="title">GM Adanced Robotics Center</h2>
    <ul>
        <li>
            <h4 class="subtitle">User Interface Developer</h4>
            <ul class="text">
                <li>Implemented a web based diagnostic interface for robot</li>
                <li>Setup communications between the web interface to the robot</li>
                <li>Completed a calibration workflow</li>
            </ul>
        </li>
        <li>
            <h4 class="subtitle">Software Developer</h4>
            <ul class="text">
                <li>Created and supported a flask server to administer scripts to the robot</li>
            </ul>
        </li>
    </ul>
</div>
<div class="experience">
    <h2 class="title">Collage (2024)</h2>
    <ul><li>
        <h4 class="subtitle">Front End Developer</h4>
        <ul class="text">
            <li>Built out page designs for user profiles</li>
            <li>Architected user journey through classes and classmates</li>
        </ul>
    </li></ul>
</div>
<div class="experience">
    <h2 class="title">CBSurety (2018-2023)</h2>
    <ul>
        <li>
            <h4 class="subtitle">Front End Developer</h4>
            <ul class="text">
                <li>Designed intuitive dashboards for both client and internal daily use</li>
                <li>Wire-framed projects for rapid iterative design flow</li>
                <li>Prepared checkout flows for e-commerce sites, code reviews, coordinated with offshore developers to ensure clients</li>
                <li>Updated our api documentation that shortening our integration process on client systems </li>
            </ul>
        </li>
        <li>
            <h4 class="subtitle">Application Developer</h4>
            <ul class="text">
                <li>Developed the eCheck payment flow with Check Verification that reduced check payment times from 5 days to under 5 minutes</li>
                <li>Implemented Plaid integration for balance checking across multiple bank accounts</li>
                <li>Maintained CBSurety’s WordPress/Magento plugin for 15+ clients checkout process servicing hundreds of orders a day with a 99.99% uptime</li>
            </ul>
        </li>
        <li>
            <h4 class="subtitle">Project Management</h4>
            <ul class="text">
                <li>Managed product lifecycle from conception, requirements, development, testing, and launches of all major products and updates</li>
                <li>Coordinated between software teams and clients to ensure expectations were met within design specs in time</li>
                <li>Scheduled tickets to be spread across 4 developers in 2 teams</li>
                <li>Administrated our Jira system to reduce ticket backlog from 2 weeks to within 3 days</li>
            </ul>
        </li>
    </ul>
</div>
</div>
</template>

<style scoped src="@/assets/resume.css"></style>