function getLocation() {
    const isPermissionGranted = window.confirm("位置情報の利用を許可しますか？");

    if (isPermissionGranted) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
/////////////////////////////////////////////////////////////////////////////////////////
function createEntityElements(jsonData) {
    var entities = jsonData.members;
    var scene = document.getElementById('scene');

    entities.forEach(function (entityInfo) {
        var entityElement = document.createElement('a-entity');
        entityElement.setAttribute('gltf-model', entityInfo.model);
        entityElement.setAttribute('rotation', entityInfo.rotation);
        entityElement.setAttribute('scale', entityInfo.scale);
        entityElement.setAttribute('animation', entityInfo.animation);
        entityElement.setAttribute('gps-entity-place', 'latitude:' + entityInfo.latitude + '; longitude:' + entityInfo.longitude);

        scene.appendChild(entityElement);
    });
}

// Fetch JSON data from an external file
fetch('shibata_stores.json')
    .then(response => response.json())
    .then(jsonData => {
        // Call the function to create A-Frame entity elements
        createEntityElements(jsonData);
    })
    .catch(error => console.error('Error fetching JSON:', error));

/////////////////////////////////////////////////////////////////////////////////////////
                },
                function(error) {
                    const errorMessage = "位置情報の取得に失敗しました。エラーコード: " + error.code + "\nエラーメッセージ: " + error.message;
                    alert(errorMessage);
                    console.error(errorMessage);
                }
            );
        } else {
            const errorMessage = "このブラウザは位置情報の取得をサポートしていません。";
            alert(errorMessage);
            console.error(errorMessage);
        }
    } else {
        const errorMessage = "位置情報の利用が拒否されました。";
        alert(errorMessage);
        console.error(errorMessage);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    getLocation();
});
