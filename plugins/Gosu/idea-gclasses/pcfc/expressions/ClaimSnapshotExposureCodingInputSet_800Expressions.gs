package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/shared/ClaimSnapshotExposureCodingInputSet.800.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposureCodingInputSet_800Expressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/shared/ClaimSnapshotExposureCodingInputSet.800.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposureCodingInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotExposureCodingInputSet.800.pcf: line 14, column 31
    function initialValue_0 () : dynamic.Dynamic {
      return ExposureParam
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposureCodingInputSet.800.pcf: line 21, column 36
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposureCodingInputSet.800.pcf: line 21, column 36
    function value_1 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposureCodingInputSet.800.pcf: line 26, column 36
    function value_4 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getVariableValue("Exposure", 0) as dynamic.Dynamic
    }
    
    property set Exposure ($arg :  dynamic.Dynamic) {
      setVariableValue("Exposure", 0, $arg)
    }
    
    property get ExposureParam () : dynamic.Dynamic {
      return getRequireValue("ExposureParam", 0) as dynamic.Dynamic
    }
    
    property set ExposureParam ($arg :  dynamic.Dynamic) {
      setRequireValue("ExposureParam", 0, $arg)
    }
    
    
  }
  
  
}