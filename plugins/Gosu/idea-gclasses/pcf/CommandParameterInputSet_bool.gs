package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/bizrules/CommandParameterInputSet.bool.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CommandParameterInputSet_bool extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($parameterHolder :  gw.bizrules.pcf.RuleCommandParameterHolder) : void {
    __widgetOf(this, pcf.CommandParameterInputSet_bool, SECTION_WIDGET_CLASS).setVariables(false, {$parameterHolder})
  }
  
  function refreshVariables ($parameterHolder :  gw.bizrules.pcf.RuleCommandParameterHolder) : void {
    __widgetOf(this, pcf.CommandParameterInputSet_bool, SECTION_WIDGET_CLASS).setVariables(true, {$parameterHolder})
  }
  
  
}