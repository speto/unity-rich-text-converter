import Converter from "..";
import {bidirectionalTestWrapper, html2unityTestWrapper, unity2htmlTestWrapper} from "./util";

describe("general test", () => {
  const converter = new Converter();
// tslint:disable-next-line: max-line-length
  const htmltext1 = `<p>你<em>好</em>，<strong><span style="color: #d35400ff"><span style="font-size: 16px">世</span>界</span>!</strong></p><p></p>`;
  const unitytext1 = "你<i>好</i>，<b><color=#d35400ff><size=16>世</size>界</color>!</b>\n";
  bidirectionalTestWrapper(converter, "case 1", htmltext1, unitytext1);
});

describe("paragraph test", () => {
  const converter = new Converter();
  const htmltext1 = `<p></p><p>你好</p><p> </p><p>世</p><p></p>`;
  const unitytext1 = "\n你好\n \n世\n";
  bidirectionalTestWrapper(converter, "case 1", htmltext1, unitytext1);
});

describe("color hex value 6-digit test", () => {
  const converter = new Converter();
// tslint:disable-next-line: max-line-length
  const htmltext1 = `<p><span style="color: #d35400"><span style="font-size: 16px">你</span>好</span><span style="color: #d00035">世<span style="font-size: 16px">界</span></span></p>`;
  const unitytext1 = "<color=#d35400ff><size=16>你</size>好</color><color=#d00035ff>世<size=16>界</size></color>";
  html2unityTestWrapper(converter, "case 1", htmltext1, unitytext1);
  const htmltext2 = `<p><span style="color: #d35400ff"><span style="font-size: 16px">你</span>好</span><span style="color: #d00035ff">世<span style="font-size: 16px">界</span></span></p>`;
  unity2htmlTestWrapper(converter, "case 1", htmltext2, unitytext1);
});

describe("color hex value 8-digit test", () => {
  const converter = new Converter();
// tslint:disable-next-line: max-line-length
  const htmltext1 = `<p><span style="color: #d35400aa"><span style="font-size: 16px">你</span>好</span><span style="color: #d0003566">世<span style="font-size: 16px">界</span></span></p>`;
  const unitytext1 = "<color=#d35400aa><size=16>你</size>好</color><color=#d0003566>世<size=16>界</size></color>";
  bidirectionalTestWrapper(converter, "case 1", htmltext1, unitytext1);
});

describe("color name test", () => {
  const converter = new Converter();
// tslint:disable-next-line: max-line-length
  const htmltext1 = `<p><span style="color: green"><span style="font-size: 16px">你</span>好</span><span style="color: red">世<span style="font-size: 16px">界</span></span></p>`;
  const unitytext1 = "<color=green><size=16>你</size>好</color><color=red>世<size=16>界</size></color>";
  bidirectionalTestWrapper(converter, "case 1", htmltext1, unitytext1);
});
