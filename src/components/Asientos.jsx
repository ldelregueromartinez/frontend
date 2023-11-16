import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const url = 'https://create-react-app-beta-snowy.vercel.app/asientos/';

export class Asientos extends Component {

    state = {
        data: [],
        modal: false,
        form: {
            fecha:'',
            antecedentes:'',
            acto_profesional:'',
            otras_informaciones:'',
            pacienteId:'',
            especialistaId:''

        }
    };

    //Funcion para mostrar modal

    show = () => {
        this.setState({ modal: !this.state.modal })
    };




    //Funcion listadoAsientos
    listadoAsientos = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });

        }).catch(error => {
            console.log(error.message)
        })
    };
    //Montar la funcion listadoAsientos
    componentDidMount() {
        this.listadoAsientos();
    };





    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    };

    //Funcion de alta de Asientos
    altaAsiento = async () => {
        await axios.post(url, this.state.form).then(
            response => {
                console.log(response)
                this.show();
                this.listadoAsientos();
                

            }
        ).catch(error => {
            console.log(error.message)
        })
    };




    render() {
        return (
            (


                <div className="w-100 m-auto">
                    <h2 className="h2 text-center mb-4">
                        Listado de Asientos <button className='btn btn-success ms float-end' onClick={this.show} style={{ fontSize: 12 }}>NUEVO</button>

                    </h2>

                    <hr />

                    <div class="table-table-sm">
                        <table className='table table-striped text-center align-middle' >
                            <thead>
                                <tr>
                                    <th style={{ fontSize: 12 }}>ID</th>
                                    <th style={{ fontSize: 12 }}>Fecha</th>
                                    <th style={{ fontSize: 12 }}>Antecedentes</th>
                                    <th style={{ fontSize: 12 }}>Acto Profesional</th>
                                    <th style={{ fontSize: 12 }}>Otras Informaciones</th>
                                    <th style={{ fontSize: 12 }}>Paciente</th>
                                    <th style={{ fontSize: 12 }}>Especialista</th>
 
                                </tr>

                            </thead>
                            <tbody>
                                {this.state.data.map(asiento => {
                                    return (
                                        <tr>
                                            <td style={{ fontSize: 11 }}>{asiento.id}</td>
                                            <td style={{ fontSize: 11 }}>{asiento.fecha}</td>
                                            <td style={{ fontSize: 11 }}>{asiento.antecedentes}</td>
                                            <td style={{ fontSize: 11 }}>{asiento.acto_profesional}</td>
                                            <td style={{ fontSize: 11 }}>{asiento.otras_informaciones}</td>
                                            <td style={{ fontSize: 11 }}>{asiento.pacienteId}</td>
                                            <td style={{ fontSize: 11 }}>{asiento.especialistaId}</td>
 
                                            <td><div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                <button className="btn btn-primary ms float-end" style={{ fontSize: 8 }}>EDITAR</button>
                                                <button className="btn btn-danger ms float-end" style={{ fontSize: 8 }}>BORRAR</button></div></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                        <Modal isOpen={this.state.modal} size="lg">
                            <ModalHeader toggle={this.show}>
                                Creación de asiento Clínico
                            </ModalHeader>

                            <ModalBody >
                                <form className='form-group'>
                                    <div className='border rounded p-2 mb-3'>
                                        <div className="input-group">

                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Fecha:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la Fecha' name='fecha' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Antecedentes:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese Antecedentes' name='antecedentes' onChange={this.handleChange} />
                                                </div>
                                            </div>


                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Acto Profesional:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el Acto Profesional' name='acto_profesional' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-3">
                                                    <label className='text-secondary badge'> Otras Informaciones:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese otra información relevante' name='otras_informaciones' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-3">
                                                    <label className='text-secondary badge'> Paciente:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el Paciente' name='pacienteId' onChange={this.handleChange} />
                                                </div>

                                               
                                            </div>



                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">


                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Especialista:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el Especialista' name='especialistaId' onChange={this.handleChange} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </ModalBody>

                            <ModalFooter>
                                <button className='btn btn-success ms float-end"' onClick={this.altaAsiento}>CREAR</button>
                                <button className='btn btn-secondary ms float-end"' onClick={this.show}>CANCELAR</button>
                            </ModalFooter>
                        </Modal>



                    </div>
                </div >

            )
        )
    }
}
