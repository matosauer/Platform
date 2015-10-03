var res = {
    BG_IMAGE: "res/BG-HD.png",
    CLOUD_IMAGE: "res/Cloud-HD.png",
    ROBIN_IMAGE: "res/Robin-HD.png"
};

var g_gamescene = [
    res.BG_IMAGE,
    res.CLOUD_IMAGE,
    res.ROBIN_IMAGE
];

var gs = {
    resolutionWidth: 600,
    resolutionHeight: 600,
    
    kZindexBG: 0,
    kZindexPlatform: 10,
    
    kPlatformSpeedSlow: 70,
    kPlatformSpeedFast: 150,
    
    kPlatformScale: 1,
    
    kPlatformHeight: 68,
    
    kSceneStateStopped: 0,
    kSceneStateMovingSlow: 1,
    kSceneStateMovingFast: 2
    
    
}; 

var go = {
    plyer: null,
    platformArray: [],
    sceneState: gs.kSceneStateStopped
}