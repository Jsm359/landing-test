import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import "antd/dist/antd.css";
import { rules } from '../../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const LoginForm = () => {
  const dispatch = useDispatch()
  const {error, isLoading} = useTypedSelector(state => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useActions()

  const submit = () => {
    login(username, password)
  }

  return (
    <Form
      onFinish={submit}
    >
      {error && <div style={{color:"red"}}>
        {error}
      </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите имя пользователя')]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль')]}
      >
        <Input value={password} onChange={e => setPassword(e.target.value)} type={"password"} />
      </Form.Item>

      <Form.Item  name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Запомнить</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isLoading} style={{backgroundColor: 'transparent', borderColor:'#FF3693', borderRadius:'8px'}} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}
