package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/shared/exposures/PIPWageBenefitsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PIPWageBenefitsInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Exposure :  Exposure) : void {
    __widgetOf(this, pcf.PIPWageBenefitsInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$Exposure})
  }
  
  function refreshVariables ($Exposure :  Exposure) : void {
    __widgetOf(this, pcf.PIPWageBenefitsInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$Exposure})
  }
  
  
}