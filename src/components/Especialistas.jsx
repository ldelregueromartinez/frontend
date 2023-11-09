import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const url = 'http://localhost:3300/especialistas/';

export class Especialistas extends Component {

    state = {
        data: [],
        modal: false,
        form: {
            nombre:'',
            apellido:'',
            direccion:'',
            telefono:'',
            dni:'',
            fecha_nac:'',
            matricula:'',
            especialidad:'',
            fechaIngreso:'',
            fechaEgreso:'',
            consultorioId:''
        }
    };

    //Funcion para mostrar modal

    show = () => {
        this.setState({ modal: !this.state.modal })
    };




    //Funcion listadoEspecialistas
    listadoEspecialistas = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });

        }).catch(error => {
            console.log(error.message)
        })
    };
    //Montar la funcion listadoEspecialistas
    componentDidMount() {
        this.listadoEspecialistas();
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

    //Funcion de alta de Especialista
    altaEspecialista = async () => {
        await axios.post(url, this.state.form).then(
            response => {
                console.log(response)
                this.show();
                this.listadoEspecialistas();

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
                        Listado de Especialistas <button className='btn btn-success ms float-end' onClick={this.show} style={{ fontSize: 12 }}>NUEVO</button>

                    </h2>

                    <hr />

                    <div class="table-table-sm">
                        <table className='table table-striped text-center align-middle' >
                            <thead>
                                <tr>
                                    <th style={{ fontSize: 12 }}>ID</th>
                                    <th style={{ fontSize: 12 }}>Nombre</th>
                                    <th style={{ fontSize: 12 }}>Apellido</th>
                                    <th style={{ fontSize: 12 }}>Dirección</th>
                                    <th style={{ fontSize: 12 }}>Teléfono</th>
                                    <th style={{ fontSize: 12 }}>DNI</th>
                                    <th style={{ fontSize: 12 }}>Fecha de Nacimiento</th>
                                    <th style={{ fontSize: 12 }}>Matricula</th>
                                    <th style={{ fontSize: 12 }}>Especialidad</th>
                                    <th style={{ fontSize: 12 }}>Fecha de Ingreso</th>
                                    <th style={{ fontSize: 12 }}>Fecha de Egreso</th>
                                    <th style={{ fontSize: 12 }}>Consultorio</th>
                                </tr>

                            </thead>
                            <tbody>
                                {this.state.data.map(especialista => {
                                    return (
                                        <tr>
                                            <td style={{ fontSize: 11 }}>{especialista.id}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.nombre}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.apellido}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.direccion}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.telefono}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.dni}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.fecha_nac}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.matricula}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.especialidad}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.fechaIngreso}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.fechaEgreso}</td>
                                            <td style={{ fontSize: 11 }}>{especialista.consultorioId}</td>
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
                                Creación de especialista
                            </ModalHeader>

                            <ModalBody >
                                <form className='form-group'>
                                    <div className='border rounded p-2 mb-3'>
                                        <div className="input-group">

                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Nombre:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el Nombre' name='nombre' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Apellido:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el Apellido' name='apellido' onChange={this.handleChange} />
                                                </div>
                                            </div>


                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Dirección:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la Direccion' name='direccion' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-3">
                                                    <label className='text-secondary badge'> DNI:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el DNI' name='dni' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-3">
                                                    <label className='text-secondary badge'> Matricula:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la Matricula' name='matricula' onChange={this.handleChange} />
                                                </div>

                                               
                                            </div>



                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">


                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Fecha de Nacimiento:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la fecha de nacimiento' name='fecha_nac' onChange={this.handleChange} />
                                                </div>
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Telefono:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el Teléfono' name='telefono' onChange={this.handleChange} />
                                                </div>

                                            </div>



                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Especialidad:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la Especialidad' name='especialidad' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Fecha de Ingreso:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la fecha de Ingreso' name='fechaIngreso' onChange={this.handleChange} />
                                                </div>
                                            </div>



                                            <div className="col-xs-12 col-md-3 input-group input-group-sm">
                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Fecha de Egreso:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese la fecha de Egreso' name='fechaEgreso' onChange={this.handleChange} />
                                                </div>

                                                <div className="col-6">
                                                    <label className='text-secondary badge'> Consultorio:</label>
                                                    <input type="text" className='form-control mb-2' placeholder='Ingrese el consultorio' name='consultorioId' onChange={this.handleChange} />
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </form>
                            </ModalBody>

                            <ModalFooter>
                                <button className='btn btn-success ms float-end"' onClick={this.altaEspecialista}>CREAR</button>
                                <button className='btn btn-secondary ms float-end"' onClick={this.show}>CANCELAR</button>
                            </ModalFooter>
                        </Modal>



                    </div>
                </div >

            )
        )
    }
}
