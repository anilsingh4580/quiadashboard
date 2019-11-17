import React, {useState, useEffect} from 'react';
import {viewJackpot} from '../../Service/index';
import {Link} from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';

const ViewJackpot = props => {
  const [data,
    setData] = useState([]);
  const [loading,
    setLoading] = useState(true);

  useEffect(() => {
    getJackpot();
  }, []);

  async function getJackpot() {
    const result = await viewJackpot();
    setData(result.data);
    setLoading(false);
  };

  return (
    <div className="animated">

      <Card>
        <CardHeader>
          <i className="icon-menu"/>
          <strong>View Jackpot</strong>
        </CardHeader>
        <CardBody>
          <Button type="button" className="mr-1 btncolor">
            <Link to="/question/add-jackpot" className="decoration">
              <i className="icon-plus"/>
              <strong>
                Add Jackpot</strong>
            </Link>
          </Button>
          {loading
            ? (
              <div>Loading ...</div>
            )
            : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Price</th> 
                  </tr>
                </thead>
                <tbody>

                  {data.map((list, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{list.title}</td>
                      <td>{list.date}</td>
                      <td>{list.price}</td>
                      <td>
                        <Link to='question/add-jackpot'>
                          <Button className="btn btn-sm" color="info">
                            Edit
                          </Button>
                        </Link>
                      </td>
                      
                      <td>
                        <Link to='/question/add-jackpot-question'>
                          <Button className="btn btn-sm" color="info">
                            Add Question
                          </Button>
                        </Link>
                      </td>
                      
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                          if (window.confirm("Are you sure you wish to delete")) 
                            this.handleDelete(list._id);
                          }}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
        </CardBody>
      </Card>
    </div>
  )
}

export default ViewJackpot;