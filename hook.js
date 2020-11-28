function videoPlayInit(videoId, pcid){
    $.post(playRequestUrl,{id:videoId},function(resp){
        createPlayer(resp.data);
    },'JSON');
    return true;
}