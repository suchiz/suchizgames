var introductionIsDisplayed = 1;
var projectIsDisplayed = 1;
var bscUpsIsDisplayed = 1;
var ppkeIsDisplayed = 1;
var mscUpsIsDisplayed = 1;

var imgIntro = document.getElementById('imgIntro');
var imgProject = document.getElementById('imgProject');
var imgBscups = document.getElementById('imgBscups');
var imgMscppke = document.getElementById('imgMscppke');
var imgMscups = document.getElementById('imgMscups');

function show_hide_introduction(){
    if (introductionIsDisplayed == 1){
        document.getElementById("introductionDiv").style.display="inline";
        document.getElementById("introImgToHide").style.display="none";
        document.getElementById("introTextToHide").style.display="none";
        introductionIsDisplayed = 0;
        imgIntro.src = "images/dropdown_button_small_reverse.png"
    } else {
        document.getElementById("introductionDiv").style.display="none";
        document.getElementById("introImgToHide").style.display="inline";
        document.getElementById("introTextToHide").style.display="inline";
        introductionIsDisplayed = 1;
        imgIntro.src = "images/dropdown_button_small.png"
    }
}

function show_hide_project(){
    if (projectIsDisplayed == 1){
        document.getElementById("projectDiv").style.display="inline";
        projectIsDisplayed = 0;
        imgProject.src = "images/dropdown_button_reverse.png"
    } else {
        document.getElementById("projectDiv").style.display="none";
        projectIsDisplayed = 1;
        imgProject.src = "images/dropdown_button.png"
    }
}

function show_hide_bscups(){
    if (bscUpsIsDisplayed == 1){
        document.getElementById("bscupsDiv").style.display="inline";
        bscUpsIsDisplayed = 0;
        imgBscups.src = "images/dropdown_button_small_reverse.png"
    } else {
        document.getElementById("bscupsDiv").style.display="none";
        bscUpsIsDisplayed = 1;
        imgBscups.src = "images/dropdown_button_small.png"
    }
}

function show_hide_mscppke(){
    if (ppkeIsDisplayed == 1){
        imgMscppke.src = "images/dropdown_button_small_reverse.png"
        document.getElementById("mscppkeDiv").style.display="inline";
        ppkeIsDisplayed = 0;
    } else {
        document.getElementById("mscppkeDiv").style.display="none";
        ppkeIsDisplayed = 1;
        imgMscppke.src = "images/dropdown_button_small.png"
    }
}

function show_hide_mscups(){
    if (mscUpsIsDisplayed == 1){
        imgMscups.src = "images/dropdown_button_small_reverse.png"
        document.getElementById("mscupsDiv").style.display="inline";
        mscUpsIsDisplayed = 0;
    } else {
        document.getElementById("mscupsDiv").style.display="none";
        mscUpsIsDisplayed = 1;
        imgMscups.src = "images/dropdown_button_small.png"
    }
}