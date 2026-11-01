import type { RecognitionEntry } from "@/types/content";

export const recognition: RecognitionEntry[] = [
  {
    program: "Booking.com",
    shortProgram: "Booking.com",
    code: "P1",
    severity: "critical",
    severityLabel: "Critical",
    record: "Acknowledged",
  },
  {
    program: "Booking.com",
    shortProgram: "Booking.com",
    code: "P2",
    severity: "high",
    severityLabel: "High",
    record: "Acknowledged",
  },
  {
    program: "DoorDash",
    shortProgram: "DoorDash",
    code: "P2",
    severity: "high",
    severityLabel: "High",
    record: "Acknowledged",
  },
  {
    program: "Amazon Vulnerability Research Program",
    shortProgram: "Amazon VRP",
    code: "P3",
    severity: "medium",
    severityLabel: "Medium",
    record: "Acknowledged",
  },
];
