package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/workload/WeightedWorkloadAdminPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class WeightedWorkloadAdminPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($classification :  WorkloadClassification) : void {
    __widgetOf(this, pcf.WeightedWorkloadAdminPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$classification})
  }
  
  function refreshVariables ($classification :  WorkloadClassification) : void {
    __widgetOf(this, pcf.WeightedWorkloadAdminPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$classification})
  }
  
  
}