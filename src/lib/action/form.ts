'use server'

export async function formLogin(formData:any){
    const forms={
        name:formData.get('name'),
        faName:formData.get('faName'),
        email:formData.get('email')
    }
    console.log(forms)

}