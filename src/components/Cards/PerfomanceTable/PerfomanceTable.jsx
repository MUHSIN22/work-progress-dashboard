import React from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import CustomTable from '../../Table/CustomTable'

const data = [
        {
            id: "bide-123",
            task: "this is sample task",
            Estimation: "12h 30m",
            logged: "5h 30m",
            deviation: "-2h",
            status: "Done",
            fileCheckInCount: "5",
            lineCount: "100"
        },
        {
            id: "bide-123",
            task: "this is sample task",
            Estimation: "12h 30m",
            logged: "5h 30m",
            deviation: "-2h",
            status: "In progress",
            fileCheckInCount: "5",
            lineCount: "100"
        },
        {
            id: "bide-123",
            task: "this is sample task",
            Estimation: "12h 30m",
            logged: "5h 30m",
            deviation: "-2h",
            status: "In progress",
            fileCheckInCount: "5",
            lineCount: "100"
        },
        {
            id: "bide-123",
            task: "this is sample task",
            Estimation: "12h 30m",
            logged: "5h 30m",
            deviation: "-2h",
            status: "In progress",
            fileCheckInCount: "5",
            lineCount: "100"
        },
        {
            id: "bide-123",
            task: "this is sample task",
            Estimation: "12h 30m",
            logged: "5h 30m",
            deviation: "-2h",
            status: "In progress",
            fileCheckInCount: "5",
            lineCount: "100"
        },
        {
            id: "bide-123",
            task: "this is sample task",
            Estimation: "12h 30m",
            logged: "5h 30m",
            deviation: "-2h",
            status: "In progress",
            fileCheckInCount: "5",
            lineCount: "100"
        }
    ]

const tableHeadings = ["Id", "Task", "Estimation", "Logged", "Deviation", "Status", "File Checkin Count", "Line Count"]

export default function PerformanceTable({heading}) {
  return (
    <CardPrimary heading={heading}>
        <CustomTable tableHeadings={tableHeadings} tableData={data}/>
    </CardPrimary>
  )
}
