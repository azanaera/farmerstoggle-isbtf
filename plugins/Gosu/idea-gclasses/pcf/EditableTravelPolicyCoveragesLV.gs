package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/EditableTravelPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditableTravelPolicyCoveragesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Policy :  Policy) : void {
    __widgetOf(this, pcf.EditableTravelPolicyCoveragesLV, SECTION_WIDGET_CLASS).setVariables(false, {$Policy})
  }
  
  function refreshVariables ($Policy :  Policy) : void {
    __widgetOf(this, pcf.EditableTravelPolicyCoveragesLV, SECTION_WIDGET_CLASS).setVariables(true, {$Policy})
  }
  
  
}