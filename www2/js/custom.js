iziToast.settings({
    timeout: 3000, // default timeout
    resetOnHover: true,
    // icon: '', // icon class
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    onOpen: function () {
        console.log('callback abriu!');
    },
    onClose: function () {
        console.log("callback fechou!");
    }
});


function showSuccessToast() {
    $('#ModalAdd').modal('hide');

    iziToast.success({ 
        timeout: 5000,
        icon: 'fas fa-check',
        title: 'Eklendi',
        message: 'İşlem başarılı bir şekilde gerçekleşti!'
    });
}
function showUpdateToast() {
    $('#ModalEdit').modal('hide');

    iziToast.success({ 
        timeout: 5000,
        icon: 'fas fa-check',
        title: 'Güncellendi',
        message: 'İşlem başarılı bir şekilde gerçekleşti!'
    });
}
function showDeleteToast() {
    $('#ModalDelete').modal('hide');

    iziToast.success({ 
        timeout: 5000,
        icon: 'fas fa-check',
        title: 'Silindi',
        message: 'İşlem başarılı bir şekilde gerçekleşti!'
    });
}

function showErrorToast() {
    iziToast.error({ 
        timeout: 5000,
        icon: 'fas fa-times',
        title: 'Hata',
        message: 'İşlem başarısız oldu!'
    });
}
