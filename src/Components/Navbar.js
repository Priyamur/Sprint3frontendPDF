import React, { useState } from 'react';
import '../Styles/Navbar.css';
import Students from './PDFViewer';
import AssessmentEvaluation from './AssessmentEvaluation';
import logo from '../Images/logo.png';

function Navbar() {
    // const [folders, setFolders] = useState([
    //     {
    //         name: 'HTML',
    //         isOpen: false,
    //         files: ['PPT', 'PDF', 'TEXT', 'VIDEO','AUDIO'],
    //     },
    //     // {
    //     //     name: 'Batch 2',
    //     //     isOpen: false,
    //     //     files: ['Students 2.1', 'Assessment Evaluation 2.2', 'Assignment Evaluation 2.3', ' Assignment 2.4'],
    //     // },
    //     // {
    //     //     name: 'Batch 3',
    //     //     isOpen: false,
    //     //     files: ['Students 3.1', 'Assessment Evaluation 3.2', 'Assignment Evaluation 3.3', 'Assignment 3.4'],
    //     // },
    // ]);

    // const [selectedComponent, setSelectedComponent] = useState(null);

    // const toggleFolder = (index) => {
    //     const updatedFolders = [...folders];
    //     updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
    //     setFolders(updatedFolders);
    // };

    // const handleFileClick = (file) => {
    //     switch (file) {
    //         case 'Students 1.1': setSelectedComponent(<Students />);
    //             break;
    //         case 'Assessment Evaluation 1.2': setSelectedComponent(<AssessmentEvaluation />);
    //             break;
    //         default:
    //             setSelectedComponent(null);
    //             break;
    //     }
    //     // if (file.startsWith('Students')) {
    //     //     setSelectedComponent(<Students />);
    //     // } else {
    //     //     // Handle other file types
    //     // }
    // };

    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <div className='logo'>
                        <img src={logo} alt="Logo" class="rounded-pill w-50"/>
                        </div>
                    </a>
                </div>
            </nav>
            <div className='d-flex'>
                <div className='side'>
                    <ul className="tree">
                        {/* {folders.map((folder, index) => (
                            <li key={index} className={`folder ${folder.isOpen ? 'open' : ''}`} onClick={() => toggleFolder(index)}>
                                {folder.isOpen ? '-' : '+'} {folder.name}
                                {folder.isOpen && (
                                    <ul>
                                        {folder.files.map((file, fileIndex) => (
                                            <li key={fileIndex} className="file" onClick={() => handleFileClick(file)}>
                                                {file}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))} */}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;