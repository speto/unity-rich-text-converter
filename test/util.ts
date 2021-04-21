import assert = require("assert");
import { IConverter } from "../src/converterinterface";

export function html2unityTestWrapper(converter: IConverter, title: string, html: string, unity: string) {
  it(`${title}: html2unity`, () => {
    const text = html;
    const expected = unity;
    const actual = converter.html2unity(text);
    assert.equal(actual, expected);
  });
}

export function unity2htmlTestWrapper(converter: IConverter, title: string, html: string, unity: string) {
  it(`${title}: unity2html`, () => {
    const text = unity;
    const expected = html;
    const actual = converter.unity2html(text);
    assert.equal(actual, expected);
  });
}

export function bidirectionalTestWrapper(converter: IConverter, title: string, html: string, unity: string) {
  html2unityTestWrapper(converter, title, html, unity);
  unity2htmlTestWrapper(converter, title, html, unity);
}
