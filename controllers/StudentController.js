import *as StudentModel from '../models/StudentModel.js';

export const fetchStudents = async (req, res) => {
    try {
        const student = await StudentModel.getStudent();
        res.status(200).json({success: true, data: student});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}