package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/i18n/LocalizedValuesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LocalizedValuesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($entity :  Object, $fieldNames :  String[], $columnNames :  String[]) : void {
    __widgetOf(this, pcf.LocalizedValuesLV, SECTION_WIDGET_CLASS).setVariables(false, {$entity, $fieldNames, $columnNames})
  }
  
  function refreshVariables ($entity :  Object, $fieldNames :  String[], $columnNames :  String[]) : void {
    __widgetOf(this, pcf.LocalizedValuesLV, SECTION_WIDGET_CLASS).setVariables(true, {$entity, $fieldNames, $columnNames})
  }
  
  
}