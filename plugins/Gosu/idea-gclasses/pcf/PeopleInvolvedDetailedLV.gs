package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/partiesinvolved/PeopleInvolvedDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PeopleInvolvedDetailedLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($claim :  Claim) : void {
    __widgetOf(this, pcf.PeopleInvolvedDetailedLV, SECTION_WIDGET_CLASS).setVariables(false, {$claim})
  }
  
  function refreshVariables ($claim :  Claim) : void {
    __widgetOf(this, pcf.PeopleInvolvedDetailedLV, SECTION_WIDGET_CLASS).setVariables(true, {$claim})
  }
  
  
}