package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/exposures/ContentsDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContentsDamageDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Exposure :  Exposure) : void {
    __widgetOf(this, pcf.ContentsDamageDV, SECTION_WIDGET_CLASS).setVariables(false, {$Exposure})
  }
  
  function refreshVariables ($Exposure :  Exposure) : void {
    __widgetOf(this, pcf.ContentsDamageDV, SECTION_WIDGET_CLASS).setVariables(true, {$Exposure})
  }
  
  
}