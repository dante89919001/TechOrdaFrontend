const form = document.querySelector('form');
const input  = document.querySelector('.imgFile')

  type names = {
    name:string,
    id:number
}
  form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);   
 
    const fileData:names = {
        name:formData.get('email'),
        pass:formData.get('password'),
        file:formData.get('file'),
        id:1
    }
    //отправляю данные файла ,а не сам файл поскольку не нашел подходящей api для обработки запроса на получение файлов , jsonplaceholder не принимает файлы выдает ошибку 520
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: fileData
      }).then((response)=>{
        if(response.status == 201){
            console.log(response);
            
            alert(`Ваши данные успешно отправились, status:${response.status}`);
        }else{
            alert(`Возникла ошибка при отправке данных, status:${response.status}`); 
        }
    })


  };