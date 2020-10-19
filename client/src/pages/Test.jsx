import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'


const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const DeleteButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`



class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            pass: '',
            name: '',
            errIdMsg: '',
            errPassMsg: '',
            regId: '',
            regPass: '',
            regName: '',
        }
    }

    /**
    componentDidMount = async () => {
        await api.getTest().then(data => {
            this.setState({
                name: data.data.messeage,
            })
        })
    }
    **/


    handleChangeInputId = async (event) => {
        const inputId = event.target.value
        let errMsg
        if (!inputId.match(/^[A-Za-z0-9]+$/)) {
            errMsg = '　<=　半角英数字'
        } else {
            errMsg = true
        }
        this.setState({ 
            id: inputId,
            errIdMsg: errMsg,
        })
    }

    handleChangeInputPass = async (event) => {
        const inputPass = event.target.value
        let errMsg
        if (!inputPass.match(/^[A-Za-z0-9]+$/) ||
            inputPass.length < 8) {
            errMsg = '　<=　半角英数字８文字以上'
        } else {
            errMsg = true
        }
        this.setState({ 
            pass: inputPass,
            errPassMsg: errMsg,
        })
    }

    handleChangeInputName = async (event) => {
        const inputName = event.target.value
        this.setState({ 
            name: inputName,
        })
    }

    handleRegister = async () => {
        const { id, pass, name } = this.state
        const payload = { id, pass, name }

        await api.register(payload).then(res => {
            window.alert(res.data.messeage)
            this.setState({
                id: '',
                pass: '',
                name: '',
                regId: id,
                regPass: pass,
                regName: name,
            })
        })
    }

    handleDelete = async () => {
        this.setState({
            regId: '',
            regPass: '',
            regName: '',
        })
    }


    render() {

    	const { id, pass, name, errIdMsg, errPassMsg, regId, regPass, regName, } = this.state

    	return(
    		<Wrapper>
                
                <Title>Test</Title>

                <tr>
                    <td>
                        ＩＤ：
                    </td>
                    <td>
                        <InputText
                            type="text"
                            value={id}
                            onChange={this.handleChangeInputId}
                        />
                    </td>
                    <td>
                        <font color="red">{errIdMsg}</font>
                    </td>
                </tr>

                <tr>
                    <td>
                        パスワード：
                    </td>
                    <td>
                        <InputText
                            type="password"
                            value={pass}
                            onChange={this.handleChangeInputPass}
                        />
                    </td>
                    <td>
                        <font color="red">{errPassMsg}</font>
                    </td>
                </tr>

                <tr>
                    <td>
                        氏名：
                    </td>
                    <td>
                        <InputText
                            type="text"
                            value={name}
                            onChange={this.handleChangeInputName}
                        />
                    </td>    
                </tr>

                <Button onClick={this.handleRegister}>登録</Button>
                <DeleteButton onClick={this.handleDelete}>DELETE</DeleteButton>
                <br/><br/>
                
                <Label>
                    登録されたＩＤ　　　：{regId}<br/>
                    登録されたパスワード：{regPass}<br/>
                    登録された氏名　　　：{regName}<br/>
                </Label>

            </Wrapper>
    	)
    }
}

export default Test