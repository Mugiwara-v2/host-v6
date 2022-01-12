
var exec_type = "";

function toogle_payload(){
var req = new XMLHttpRequest();
req.responseType = "arraybuffer";
req.open("GET",PLfile,true);
req.send();
req.onreadystatechange=function(){
if (req.readyState == 4){
  var tmp0 = new Uint8Array(req.response.byteLength);
  tmp0.set(new Uint8Array(req.response), 0);
  var payload = new Uint32Array(tmp0);
  the_payload = payload;
  setTimeout(poc, 1500);
  }
};
}

function awaitpl() {
window.msgs.innerHTML="<h1 style=color:#87FF33>"+LoadedMSG+"</h1>";
}

function load_platinum(){
msgs.innerHTML="Loading Jailbreak + PlatinumHen-Unofficial v1.2b... Please Wait !!!";
LoadedMSG="PlatinumHen-Unofficial v1.2b Loaded... Press OK Now !!!";
PLfile = "hen/henplatinum1b.bin";
exec_type = "payload";
toogle_payload();
}

function load_goldhen2(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.0b... Please Wait !!!";
LoadedMSG="GoldHEN v2.0b Loaded... Press OK Now !!!";
PLfile = "goldhen2.0b/goldhen_2.0b.bin";
exec_type = "payload";
toogle_payload();
}

function load_goldhen2b2(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.0b2... Please Wait !!!";
LoadedMSG="GoldHEN v2.0b2 Loaded... Press OK Now !!!";
PLfile = "goldhen2.0b/goldhen_2.0b2.bin";
exec_type = "payload";
toogle_payload();
}

function load_otoolbox(){
msgs.innerHTML="Loading Jailbreak + Orbis-Toolbox... Please Wait !!!";
LoadedMSG="Orbis-Toolbox Loaded... Press OK Now !!!";
PLfile = "Orbis-Toolbox.bin";
exec_type = "payload";
toogle_payload();
}

function load_wildemodz138(){
msgs.innerHTML="Loading Jailbreak + Gta V wildemodz 1.38 1.2... Please Wait !!!";
LoadedMSG="Gta V wildemodz 1.38 1.2 Loaded... Press OK Now !!!";
PLfile = "gtabeef/wildemodz138.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtabeef133(){
msgs.innerHTML="Loading Jailbreak + gtabeef 1.33... Please Wait !!!";
LoadedMSG="gtabeef 1.33 Loaded... Press OK Now !!!";
PLfile = "gtabeef/BeefQueefMod133.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtabeef134(){
msgs.innerHTML="Loading Jailbreak + gtabeef 1.34... Please Wait !!!";
LoadedMSG="gtabeef 1.34 Loaded... Press OK Now !!!";
PLfile = "gtabeef/BeefQueefMod134.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtabeef138(){
msgs.innerHTML="Loading Jailbreak + gtabeef 1.38c... Please Wait !!!";
LoadedMSG="gtabeef 1.38c Loaded... Press OK Now !!!";
PLfile = "gtabeef/BeefQueefMod138.bin";
exec_type = "payload";
toogle_payload();
}

function load_gta127(){
msgs.innerHTML="Loading Jailbreak + gtabeef 1.27... Please Wait !!!";
LoadedMSG="gtabeef 1.27 Loaded... Press OK Now !!!";
PLfile = "gtaar/arabicguy127.bin";
exec_type = "payload";
toogle_payload();
}

function load_gta132(){
msgs.innerHTML="Loading Jailbreak + gtabeef 1.32... Please Wait !!!";
LoadedMSG="gtabeef 1.32 Loaded... Press OK Now !!!";
PLfile = "gtaar/arabicguy132.bin";
exec_type = "payload";
toogle_payload();
}

function load_gta133(){
msgs.innerHTML="Loading Jailbreak + gtabeef 1.33... Please Wait !!!";
LoadedMSG="gtabeef 1.33 Loaded... Press OK Now !!!";
PLfile = "gtaar/arabicguy133.bin";
exec_type = "payload";
toogle_payload();
}

function load_rdr2124(){
msgs.innerHTML="Loading Read Dead Redemption II Mod v1.24 ... Please Wait !!!";
LoadedMSG="Read Dead Redemption II Mod v1.24 Loaded";
PLfile = "rdr/OystersMenu124.bin";
exec_type = "payload";
toogle_payload();
}

function load_todex(){
msgs.innerHTML="Loading Jailbreak + ToDex... Please Wait !!!";
LoadedMSG="ToDex Loaded... Press OK Now !!!";
PLfile = "todex/todex.bin";
exec_type = "payload";
toogle_payload();
}

function load_dumper(){
msgs.innerHTML="Loading Jailbreak + Dumper... Please Wait !!!";
LoadedMSG="Dumper Loaded... Press OK Now !!!";
PLfile = "dumper/gamedumper.bin";
exec_type = "payload";
toogle_payload();
}

function load_ftp(){
msgs.innerHTML="Loading Jailbreak + FTP... Please Wait !!!";
LoadedMSG="FTP Loaded... Press OK Now !!!";
PLfile = "ftp/ftp.bin";
exec_type = "payload";
toogle_payload();
}

function load_app2usb(){
msgs.innerHTML="Loading Jailbreak + AppUsb... Please Wait !!!";
LoadedMSG="AppUsb Loaded... Press OK Now !!!";
PLfile = "appusb/appusb.bin";
exec_type = "payload";
toogle_payload();
}

function load_webrte(){
msgs.innerHTML="Loading Jailbreak + WebRte... Please Wait !!!";
LoadedMSG="WebRte Loaded... Press OK Now !!!";
PLfile = "webrte/webrte.bin";
exec_type = "payload";
toogle_payload();
}

function load_ps4debug(){
msgs.innerHTML="Loading Jailbreak + Ps4Debug... Please Wait !!!";
LoadedMSG="Ps4Debug Loaded... Press OK Now !!!";
PLfile = "ps4debug/ps4debug.bin";
exec_type = "payload";
toogle_payload();
}

function load_dbackup(){
msgs.innerHTML="Loading Jailbreak + Ps4Debug... Please Wait !!!";
LoadedMSG="DB Backup Loaded... Press OK Now !!!";
PLfile = "backup/backup.bin";
exec_type = "payload";
toogle_payload();
}

function load_dbrestore(){
msgs.innerHTML="Loading Jailbreak + DB Restore... Please Wait !!!";
LoadedMSG="DB Restore Loaded... Press OK Now !!!";
PLfile = "restore/restore.bin";
exec_type = "payload";
toogle_payload();
}

function load_enablebUpdates(){
msgs.innerHTML="Loading Jailbreak + Enable Updates... Please Wait !!!";
LoadedMSG="Enable Updates Loaded... Press OK Now !!!";
PLfile = "eupdates/enableupdate.bin";
exec_type = "payload";
toogle_payload();
}

function load_disableUpdates(){
msgs.innerHTML="Loading Jailbreak + Disable Updates... Please Wait !!!";
LoadedMSG="Disable Updates Loaded... Press OK Now !!!";
PLfile = "dupdates/disableupdates.bin";
exec_type = "payload";
toogle_payload();
}

function load_historyBlocker(){
msgs.innerHTML="Loading Jailbreak + History Blocker... Please Wait !!!";
LoadedMSG="History Blocker Loaded... Press OK Now !!!";
PLfile = "hblocker/historyblocker.bin";
exec_type = "payload";
toogle_payload();
}

function load_kernelClock(){
msgs.innerHTML="Loading Jailbreak + Kernel Clock... Please Wait !!!";
LoadedMSG="Kernel Clock Loaded... Press OK Now !!!";
PLfile = "kclock/kernelclock.bin";
exec_type = "payload";
toogle_payload();
}

/*function load_fanthreshold(){
msgs.innerHTML="Loading Jailbreak + Fan Threshold... Please Wait !!!";
LoadedMSG="Fan Threshold Loaded... Press OK Now !!!";
PLfile = "fanthreshold.bin";localStorage.setItem('fanthreshold', tempC.value);
exec_type = "payload";
toogle_payload();
}*/
function load_fanthreshold(){
var script = document.createElement('script');script.src = "fanthreshold.js";localStorage.setItem('fanthreshold', tempC.value);document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Fan Threshold... Please Wait !!!";
LoadedMSG="Fan Threshold Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_webactivator(){
var script = document.createElement('script');script.src = "webactivator.js";document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Web Activator... Please Wait !!!";
LoadedMSG="Web Activator Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_linux(){
msgs.innerHTML="Loading Jailbreak + Linux Loader... Please Wait !!!";
LoadedMSG="Linux Loader Loaded... Press OK Now !!!";
PLfile = "linux/linuxloader.bin";
exec_type = "payload";
toogle_payload();
}

function load_linux1(){
msgs.innerHTML="Loading Jailbreak + Linux Loader... Please Wait !!!";
LoadedMSG="Linux Loader -2gb Loaded... Press OK Now !!!";
PLfile = "linux/linuxloader2gb.bin";
exec_type = "payload";
toogle_payload();
}

function load_linux2(){
msgs.innerHTML="Loading Jailbreak + Linux Loader... Please Wait !!!";
LoadedMSG="Linux Loader -3gb Loaded... Press OK Now !!!";
PLfile = "linux/linuxloader3gb.bin";
exec_type = "payload";
toogle_payload();
}

function load_linux3(){
msgs.innerHTML="Loading Jailbreak + Linux Loader... Please Wait !!!";
LoadedMSG="Linux Loader -4gb Loaded... Press OK Now !!!";
PLfile = "linux/linuxloader4gb.bin";
exec_type = "payload";
toogle_payload();
}

function load_linux4(){
msgs.innerHTML="Loading Jailbreak + Linux Loader... Please Wait !!!";
LoadedMSG="Linux Loader -5gb Loaded... Press OK Now !!!";
PLfile = "linux/linuxloader5gb.bin";
exec_type = "payload";
toogle_payload();
}

function load_idu(){
msgs.innerHTML="Loading Jailbreak + Exit idu... Please Wait !!!";
LoadedMSG="Exit idu Loaded... Press OK Now !!!";
PLfile = "idu/exitidu.bin";
exec_type = "payload";
toogle_payload();
}