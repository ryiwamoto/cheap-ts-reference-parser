/// <reference path="a.ts"/>
/// <reference path="../b.ts"/>

class TestClass{
    private reference:string = '/// <reference path="../../should_not_parse.ts"/>';
}
