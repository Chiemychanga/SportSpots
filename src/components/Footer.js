import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="row">
                                <div class="col-4">
                                    <h4>Play by Sport</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="">Basketball</a></li>
                                        <li><a href="">Volleyball</a></li>
                                        <li><a href="">Tennis</a></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h4>Play by Day</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="">Sunday</a></li>
                                        <li><a href="">Monday</a></li>
                                        <li><a href="">Tuesday</a></li>
                                        <li><a href="">Wednesday</a></li>
                                        <li><a href="">Thursday</a></li>
                                        <li><a href="">Friday</a></li>
                                        <li><a href="">Saturday</a></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h4>Play by Level</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="">Advanced</a></li>
                                        <li><a href="">Beginner</a></li>
                                        <li><a href="">Open</a></li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="nav">
                                <li class="nav-item"><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                            </ul>
                            <br></br>
                        </div>
                            <div class="col-md-2">
                                <h5 class="text-md-right">Contact Us</h5>
                            <hr></hr>
                        </div>
                        <div class="col-md-5">
                            <form>
                                <fieldset class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
                                </fieldset>
                                <fieldset class="form-group">
                                    <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                                </fieldset>
                                <fieldset class="form-group text-xs-right">
                                    <Button type="button" class="btn btn-secondary-outline btn-lg">Send</Button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}