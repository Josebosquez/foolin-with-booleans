/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5 (num){
  return num > 5;
}

function isNewTopScore (score, top1){
  return score > top1;
}

function isInDanger (grd){
  return grd >= 60 && grd <= 71;
}


function isCoasting (numb){
  return numb >= 72 && numb <= 83;
}

function isSucceeding (numbe){
  return numbe >= 84 && numbe <= 92;
}

function isFailing (number){
  return number < 60;
}

function isAcing (gr){
  return gr > 92;
}

function isStudent(str){
  return str = str == "student";
}

function isTeacher (stri){
  return stri === "teacher";
}

function isAdmin (strin){
  return strin = strin === "admin";
}

function isElementary (string){
  return string === "elementary";
}

function areDifferentPeople (diff, people){
  areThey = diff !== people
  return areThey;
}

function isMiddleSchoolTeacher (mst, anum){
  return mst === "teacher" && anum >= "6" && anum <= "8";
}

function notAnElementarySchoolAdministrator (elementary, administrator){
  const isNotTheSame = elementary !== "elementary" || administrator !== "admin";
  return isNotTheSame;
}




/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
