function createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `     
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal Title</span>
                <span class="modal-close">&times;</span>
            </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>                                
        </div>
    </div>
`)
    document.body.appendChild(modal)
    return modal
}

// title: string
//closable: boolean
//content: string('400px')
//destroy():void
//-------------------
// вікно має закриватись
$.modal = function(options){
    const ANNIMATION_SPEED = 200
    const $modal = createModal(options)
    let closing = false

    return {
        open(){
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide') 
                closing = false
            }, ANNIMATION_SPEED)
        },
        destroy(){}
    }
}