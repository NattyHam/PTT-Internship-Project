import { z } from "zod";

// Schema
export const formSchema0221 = z.object({
  name: z.string().nonempty("กรุณาระบุชื่อ"),
  operationDate: z.string().nonempty("กรุณาระบุวันที่ปฏิบัติงาน"),
  pigPassedPriorBVTime: z.string().nonempty("กรุณาระบุเวลาที่ PIG ผ่าน PRIOR BV"),

  hovTagNo: z.string().nonempty("กรุณาระบุ HOV TAG No."),
  mainlineValve: z.enum(["Open", "Close", "Local Mode", "Remote Mode"], {
    required_error: "กรุณาเลือก Mainline Valve",
  }),

  sensingHOV: z.enum(["Open", "Close"], {
    required_error: "กรุณาเลือก Sensing HOV",
  }),

  bypassValveSize: z.string().nonempty("กรุณาระบุขนาด Bypass Valve"),
  bypassValve: z.enum(["Open", "Close"], {
    required_error: "กรุณาเลือก Bypass Valve",
  }),

  lineBreak: z.enum(["เปิดระบบ", "ปิดระบบ", "N/A"], {
    required_error: "กรุณาเลือก Line Break",
  }),
  pigSignal: z.enum(["Reset", "Active", "N/A"], {
    required_error: "กรุณาเลือก Pig Signal",
  }),
  walkieTalkie: z.enum(["Normal", "Abnormal"], {
    required_error: "กรุณาเลือก Walkie Talkie",
  }),
  basePhone: z.enum(["Normal", "Abnormal"], {
    required_error: "กรุณาเลือก Base Telephone",
  }),

  trackingLocation: z.string().nonempty("กรุณาระบุ Tracking Location"),

  locationData: z.array(
    z.object({
      time: z.string().nonempty("กรุณาระบุเวลา"),
      pressure: z.string().nonempty("กรุณาระบุ Pressure"),
      pigSignal: z.enum(["ทำงาน", "ไม่ทำงาน"], {
        required_error: "กรุณาเลือก Pig Signal",
      }),
      hump: z.enum(["ได้ยิน", "ไม่ได้ยิน"], {
        required_error: "กรุณาระบุผลการฟังจุดหุ้ม",
      }),
      agm: z.enum(["ทำงาน", "ไม่ทำงาน"], {
        required_error: "กรุณาเลือก AGM สถานะ",
      }),
      dpChart: z.enum(["ทำงาน", "ไม่ทำงาน"], {
        required_error: "กรุณาเลือก DP Chart สถานะ",
      }),
      remarks: z.string().optional(),
    })
  ),
});

// Config
const formConfig0221 = {
  title: "PIG TRACKING CHECK SHEET",
  fields: [
    // Section 1
    { name: "name", label: "ชื่องาน", type: "text" },
    {
      layout: "half",
      fields: [
        { name: "operationDate", label: "วันที่ปฏิบัติงาน", type: "date" },
        { name: "pigPassedPriorBVTime", label: "PIG PASSED PRIOR BV. Time :", type: "time" },
      ],
    },

    { section: "ตรวจสอบ Mainline Valve" },
    {
      layout: "half",
      fields: [
        { name: "hovTagNo", label: "HOV Tag No.", type: "text" },
        {
          name: "mainlineValve",
          label: "Mainline Valve",
          type: "radio",
          options: ["Open", "Close", "Local Mode", "Remote Mode"],
        },
      ],
    },

    { section: "ตรวจสอบสถานะ Sensing HOV : ต้องเปิดก่อน PIG ผ่าน" },
    {
      name: "sensingHOV",
      label: "Sensing HOV",
      type: "radio",
      options: ["Open", "Close"],
      default: "Open",
    },

    { section: "ตรวจสอบ Bypass Valve" },
    {
      layout: "half",
      fields: [
        { name: "bypassValveSize", label: "size (inches)", type: "text" },
        {
          name: "bypassValve",
          label: "Bypass Valve",
          type: "radio",
          options: ["Open", "Close"],
        },
      ],
    },

    { section: "ตรวจสอบอื่น ๆ" },
    {
      name: "lineBreak",
      label: "Line Break",
      type: "radio",
      options: ["เปิดระบบ", "ปิดระบบ", "N/A"],
    },
    {
      name: "pigSignal",
      label: "PIG Signal",
      type: "radio",
      options: ["Reset", "Active", "N/A"],
    },
    {
      name: "walkieTalkie",
      label: "Walkie Talkie",
      type: "radio",
      options: ["Normal", "Abnormal"],
    },
    {
      name: "basePhone",
      label: "Base Telephone",
      type: "radio",
      options: ["Normal", "Abnormal"],
    },

    { section: "Tracking Location" },
    { name: "trackingLocation", label: "Tracking Location:", type: "text" },

    {
      name: "locationData",
      label: "Tracking Table",
      type: "array",
      fields: [
        { name: "time", label: "Time", type: "time" },
        { name: "pressure", label: "Pressure(PSI)", type: "text" },
        {
          name: "pigSignal",
          label: "Pig Signal",
          type: "radio",
          options: ["ทำงาน", "ไม่ทำงาน"],
        },
        {
          name: "hump",
          label: "ใช้หูแนบฟังกับท่อ",
          type: "radio",
          options: ["ได้ยิน", "ไม่ได้ยิน"],
        },
        {
          name: "agm",
          label: "AGM",
          type: "radio",
          options: ["ทำงาน", "ไม่ทำงาน"],
        },
        {
          name: "dpChart",
          label: "DP Chart",
          type: "radio",
          options: ["ทำงาน", "ไม่ทำงาน"],
        },
        {
          name: "remarks",
          label: "หมายเหตุ",
          type: "text",
        },
      ],
    },
  ],
  schema: formSchema0221,
};

export default formConfig0221;