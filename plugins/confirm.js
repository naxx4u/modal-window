$.confirm = function(options){
   return new Promise((resolve, reject) => {
       const modal = $.modal({
           title: options.title,
           with: '400px',
           closable: false,
           content: options.content,
           onClose(){
               modal.destroy()
           },
           footerButtons: [
            {
                text: "Відмінити",
                type: "secondary",
                handler() {
                    modal.close()
                    reject()
                },
              },
              {
                text: "Видалити",
                type: "danger",
                handler() {
                    modal.close()
                    resolve()
                },
              },
           ]
       })
       setTimeout(() => modal.open(), 100)
   }) 
}