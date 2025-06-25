import { z } from "zod";


export const formSchema0221 = z.object({
  pigType: z.string().nonempty("กรุณาระบุ PIG TYPE"),
  pigPassageTime: z.string().nonempty("กรุณาระบุเวลาที่ PIG ผ่าน"),
  pigPassedPriorBVTime: z.string().nonempty("กรุณาระบุเวลาที่ PIG ผ่าน PRIOR BV"),
  timeUsed: z.string().nonempty("กรุณาระบุ TIME USED"),
  estimatedTime: z.string().nonempty("กรุณาระบุ ESTIMATED TIME"),
  avgSpeed: z.string().nonempty("กรุณาระบุ AVG SPEED"),

  mainlineValve: z.enum(["OPEN", "CLOSE"], { required_error: "กรุณาเลือก Mainline Valve" }),
  hovTagNo: z.string().nonempty("กรุณาระบุ HOV TAG No."),

  bypassValve: z.enum(["OPEN", "CLOSE"], { required_error: "กรุณาเลือก Bypass Valve" }),
  bypassValveSize: z.string().nonempty("กรุณาระบุขนาด Bypass Valve"),

  lineBreak: z.enum(["OPEN", "CLOSE", "N/A"], { required_error: "กรุณาเลือก Line Break Valve" }),
  pigSignal: z.enum(["Reset", "Active", "N/A"], { required_error: "กรุณาเลือก Pig Signal" }),
  walkieTalkie: z.enum(["Normal", "Abnormal"], { required_error: "กรุณาเลือก Walkie Talkie สถานะ" }),
  basePhone: z.enum(["Normal", "Abnormal"], { required_error: "กรุณาเลือก Base Phone สถานะ" }),

  locationData: z.array(
    z.object({
      time: z.string().nonempty("กรุณาระบุเวลา"),
      pressure: z.string().nonempty("กรุณาระบุ Pressure"),
      flowRate: z.string().nonempty("กรุณาระบุ Flow Rate")
    })
  ),

  remarks: z.string().optional(),
  confirmedBy1: z.string().nonempty("กรุณาระบุผู้ยืนยัน 1"),
  confirmedBy2: z.string().nonempty("กรุณาระบุผู้ยืนยัน 2"),

  sensingHOV: z.enum(["Remote", "Local"], { required_error: "กรุณาเลือก Sensing HOV" }),
  pigNo: z.string().nonempty("กรุณาระบุ PIG No."),
  pipeSize: z.string().nonempty("กรุณาระบุ Pipe Size"),
  recordedBy: z.string().nonempty("กรุณาระบุผู้บันทึก"),

  trackingTools: z.array(z.string()).nonempty("กรุณาเลือก Tracking Tools อย่างน้อย 1 รายการ")
});

const formConfig0221={
    title: "0221 - Pipeline Inspection Form",
  fields: [
    { name: "pigType", label: "PIG TYPE", type: "text" },
    { name: "pigPassageTime", label: "เวลาที่ PIG ผ่าน", type: "text" },
    { name: "pigPassedPriorBVTime", label: "เวลาที่ PIG ผ่าน PRIOR BV", type: "text" },
    { name: "timeUsed", label: "TIME USED", type: "text" },
    { name: "estimatedTime", label: "ESTIMATED TIME", type: "text" },
    { name: "avgSpeed", label: "AVG SPEED", type: "text" },

    { name: "mainlineValve", label: "Mainline Valve", type: "dropdown", options: ["OPEN", "CLOSE"] },
    { name: "hovTagNo", label: "HOV TAG No.", type: "text" },

    { name: "bypassValve", label: "Bypass Valve", type: "dropdown", options: ["OPEN", "CLOSE"] },
    { name: "bypassValveSize", label: "Bypass Valve Size", type: "text" },

    { name: "lineBreak", label: "Line Break Valve", type: "dropdown", options: ["OPEN", "CLOSE", "N/A"] },
    { name: "pigSignal", label: "Pig Signal", type: "dropdown", options: ["Reset", "Active", "N/A"] },
    { name: "walkieTalkie", label: "Walkie Talkie", type: "dropdown", options: ["Normal", "Abnormal"] },
    { name: "basePhone", label: "Base Phone", type: "dropdown", options: ["Normal", "Abnormal"] },

    { name: "locationData", label: "Location Data", type: "array", fields: [
      { name: "time", label: "Time", type: "text" },
      { name: "pressure", label: "Pressure", type: "text" },
      { name: "flowRate", label: "Flow Rate", type: "text" }
    ]},

    { name: "remarks", label: "Remarks", type: "text" },
    { name: "confirmedBy1", label: "Confirmed By 1", type: "text" },
    { name: "confirmedBy2", label: "Confirmed By 2", type: "text" },

    { name: "sensingHOV", label: "Sensing HOV", type: "dropdown", options: ["Remote", "Local"] },
    { name: "pigNo", label: "PIG No.", type: "text" },
    { name: "pipeSize", label: "Pipe Size", type: "text" },
    { name: "recordedBy", label: "Recorded By", type: "text" },

    { name: "trackingTools", label: "Tracking Tools", type: "checkbox", options: ["GPS", "Magnetic", "Others"] }
  ],
  schema: formSchema0221
};

export default formConfig0221;
