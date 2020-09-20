import React from "react";
import { Col, Row } from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";

class Report extends React.Component {
  state = {
    barData: {
      labels: ["Employed", "Student"],
      datasets: [
        {
          label: "Employed or Student",
          data: [10, 12],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    pieData: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
  };
  constructor(props) {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h3>Employee or Student</h3>
            <Bar
              data={this.state.barData}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </Col>
          <Col>
            <h3>Locality</h3>
            <Pie data={this.state.pieData} />
          </Col>
        </Row>
        <Row>
          <Col>
              Note: Due to time constraint, not able to completed form validation and dynamic charts.
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Report;
