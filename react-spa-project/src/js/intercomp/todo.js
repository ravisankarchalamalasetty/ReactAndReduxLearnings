import React from 'react';
import AddProject from './AddProject';
export default class ProjectManager extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    "id":1,
                    "projectName":"Bill Pay"
                },
                {
                    "id":2,
                    "projectName":"Bill View"
                },
                {
                    "id":3,
                    "projectName":"Auto Pay"
                }
            ],
            projectName:"",
            isEdit:false,
            projectId:0
        }
        
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.updateProject = this.updateProject.bind(this);
        this.projectData = this.state.data;        
        this.updateProjectName = this.updateProjectName.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    addProject(event){
        let count = this.state.data.length;
        let oldData = this.state.data;
        oldData.push({
            "id": count + 1,
            "projectName": this.state.projectName
        });
        this.setState({data:oldData})
        this.setState({projectName:""})
    }

    updateProject(event){
        let oldData = this.state.data;
        oldData[this.state.projectId].projectName = this.state.projectName;
        this.setState({data: oldData});
        this.setState({isEdit:false});
        this.setState({projectName:""})
    }

    editProject(event){
        let id = (event.target.dataset.id - 1);
        this.setState({projectName:this.state.data[id].projectName});
        this.setState({isEdit:true});
        this.setState({projectId:id});
    }

    deleteProject(event){
        let id = (event.target.dataset.id - 1);
        let oldData = this.state.data;
        oldData.splice((id), 1);
        for(let i=0; i < oldData.length; i++){
            oldData[i].id = (i+1);
        }
        this.setState({data: oldData});
    }

    updateProjectName(event){
        this.setState({projectName:event.target.value})
    }

    render()
    {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <AddProject showEdit={this.state.isEdit} projectNameProp={this.state.projectName} addProjectprop={this.state.isEdit? this.updateProject : this.addProject}
                            updateProjectNameProp={this.updateProjectName}/>
                        </div>
                        <div className="col-sm">
                            <DisplayProjects projectNameProp={this.state.data} 
                            updateProjectProp={this.editProject} deleteProjectProp={this.deleteProject}/>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }    
}


class AddProject extends React.Component{
    render(){
        return(
            <div className="form-group">
                <div className="row">
                    <div className="col-xs-4">
                        <label>Project Name:</label>
                    </div>
                    <div className="col-xs-4">    
                        <input type="text" className="form-control" value={this.props.projectNameProp} onChange={this.props.updateProjectNameProp}/>
                    </div>
                    <div className="col-xs-4">
                        <button className="btn btn-success" onClick={this.props.addProjectprop}>{this.props.showEdit? 'Edit' : 'Add'}</button>
                    </div>
                </div>
            </div>
        )
    }
    
    class DisplayProjects extends React.Component{
    render(){
        return(<div>{this.CreateProjectTable}</div>);
    }

    get CreateProjectTable(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>projectName</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.projectNameProp.map((user, index) => {
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.projectName}</td>
                                <td><button className="btn btn-info" data-id={user.id} onClick={this.props.updateProjectProp}>Edit</button></td>
                                <td><button className="btn btn-info" data-id={user.id} onClick={this.props.deleteProjectProp}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
