import { useState } from 'react'
import  Button from '../../components/button/Button'
import './loginPage.css'


const IRhoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
const EmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const LoginPage = () => {

const [inputval , setinputval] = useState ('')
const [Regexerror , setRegexerror] = useState (false)

  function handelClick () {
      const inputPhoneRegex = IRhoneRegex.test(inputval)
      const inputEmailRegex = EmailRegex.test(inputval)

      if (inputPhoneRegex || inputEmailRegex){
        console.log('Regex test true')
        setRegexerror(true)
      }else{
        console.log('Regex test False')
  }
  }
    return(
        <div className='w-100 h-100 d-flex justify-content-center align-items-center' dir='rtl'>
               <div className='w-25 h-50 border rounded bg-secondary d-flex justify-content-start flex-column align-items-center p-4'>
                  <div className='w-50 h-auto'>
                    <img className='w-100 h-100' src='https://www.digikala.com/statics/img/svg/logo.svg'/>
                  </div>
                  <h4 className='w-100 mt-4'>ورود | ثبت‌نام</h4>
                  <p className='w-100 mb-0 mt-4'>سلام!</p>
                  <p className='w-100 font-size mt-0 pt-0'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                  <input value={inputval} onChange={(e) => setinputval(e.target.value)} className='w-100 border rounded input-login p-3'/>
                  <small className={`w-100 ${Regexerror ? 'd-none' : 'd-block'}`}>Regex error</small>
                  <Button onClick={handelClick} className='mt-4' variant='denger' text="ورود"/>
                  <p className='fs-05'>
                  ورود شما به معنای پذیرش
                  <a href="https://google.com">شرایط دیجی‌کالا</a>
                  و
                  <a href="https://google.com">قوانین حریم‌خصوصی</a>
                  است
                  </p>
               </div>
        </div>
    )
}

export default LoginPage